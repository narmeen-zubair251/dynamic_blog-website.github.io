"use client"

import React, { useState, useEffect } from "react";

const CommentSec = () => {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  // Retrieve comments from local storage on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(savedComments);
  }, []);

  // Save comments to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && comment) {
      const newComment = { username, comment, id: Date.now() };
      setComments([newComment, ...comments]);
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Comment Section</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Post Comment
        </button>
      </form>

      <div>
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((c) => (
              <div
                key={c.id}
                className="border p-4 rounded-md bg-gray-100 shadow-sm"
              >
                <p className="font-semibold">{c.username}</p>
                <p>{c.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No comments yet!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSec;
