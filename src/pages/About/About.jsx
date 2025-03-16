import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Our Exam Portal</h1>
        <p className="lead text-muted">Empowering students to excel in their exams with smart learning tools.</p>
      </div>

      {/* Usage Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="https://source.unsplash.com/600x400/?students,exam" alt="Exam Preparation" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold text-success">How It Helps Students?</h3>
          <p className="text-muted">
            Our platform provides a structured way for students to <strong>prepare for exams</strong>, practice questions, and track progress.
            With <strong>interactive quizzes</strong>, <strong>real-time feedback</strong>, and a <strong>leaderboard</strong>, learning becomes more engaging and effective.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-5">
        <h3 className="fw-bold text-center text-danger">Key Benefits</h3>
        <div className="row mt-4">
          {/* Benefit 1 */}
          <div className="col-md-4">
            <div className="card shadow border-0 rounded text-center p-4">
              <i className="bi bi-clock text-primary display-4"></i>
              <h5 className="mt-3 fw-bold">Time Management</h5>
              <p className="text-muted">Practice under timed conditions to improve speed and accuracy.</p>
            </div>
          </div>
          {/* Benefit 2 */}
          <div className="col-md-4">
            <div className="card shadow border-0 rounded text-center p-4">
              <i className="bi bi-bar-chart text-success display-4"></i>
              <h5 className="mt-3 fw-bold">Performance Tracking</h5>
              <p className="text-muted">Monitor progress with detailed analytics and personalized feedback.</p>
            </div>
          </div>
          {/* Benefit 3 */}
          <div className="col-md-4">
            <div className="card shadow border-0 rounded text-center p-4">
              <i className="bi bi-trophy text-warning display-4"></i>
              <h5 className="mt-3 fw-bold">Leaderboard & Rewards</h5>
              <p className="text-muted">Compete with peers and earn rewards for top performance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h4 className="fw-bold text-primary">Start Your Exam Prep Today!</h4>
        <p className="text-muted">Sign up now and take your learning to the next level.</p>
        <button 
          className="btn btn-lg btn-success px-4 py-2 fw-bold shadow-sm"
          onClick={() => navigate('/quiz')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
