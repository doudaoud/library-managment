import React from "react";
import { TrendingUp, Users, BookOpen, Activity } from "lucide-react";

/**
 * Statistics Section Component - Standard CSS Version
 */
export default function Bynumber() {
  const stats = [
    {
      icon: <BookOpen size={32} />,
      value: "50K+",
      label: "Books Available",
      description: "Diverse collection across all genres",
      colorClass: "icon-blue",
    },
    {
      icon: <Users size={32} />,
      value: "12K+",
      label: "Active Members",
      description: "Growing community of readers",
      colorClass: "icon-purple",
    },
    {
      icon: <Activity size={32} />,
      value: "85K+",
      label: "Books Borrowed",
      description: "Monthly circulation statistics",
      colorClass: "icon-indigo",
    },
    {
      icon: <TrendingUp size={32} />,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Member satisfaction score",
      colorClass: "icon-violet",
    },
  ];

  return (
    <>
      <link rel="stylesheet" href="/css/bynumber.css" />
      <section className="bynumber-section">
        <div className="bynumber-container">
          {/* Section Header */}
          <div className="bynumber-header">
            <h2>By The Numbers</h2>
            <p>Our impact in the community through numbers and achievements.</p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                {/* Background Gradient */}
                <div className="stat-card-overlay" />

                {/* Content */}
                <div className="stat-content">
                  {/* Icon */}
                  <div className={`stat-icon ${stat.colorClass}`}>
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div>
                    <div className="stat-value">{stat.value}</div>
                    <p className="stat-label">{stat.label}</p>
                  </div>

                  {/* Description */}
                  <p className="stat-description">{stat.description}</p>

                  {/* Accent Line */}
                  <div className="stat-line" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="info-section">
            <div className="info-grid">
              <div>
                <h4 className="info-title">24/7 Availability</h4>
                <p className="info-text">
                  Access our platform anytime, anywhere with our responsive web
                  and mobile applications.
                </p>
              </div>
              <div>
                <h4 className="info-title">Real-time Updates</h4>
                <p className="info-text">
                  Get instant notifications about book availability, due dates,
                  and new arrivals.
                </p>
              </div>
              <div>
                <h4 className="info-title">Advanced Analytics</h4>
                <p className="info-text">
                  Comprehensive dashboards provide insights into library
                  operations and member behavior.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="bg-decoration" />
      </section>
    </>
  );
}
