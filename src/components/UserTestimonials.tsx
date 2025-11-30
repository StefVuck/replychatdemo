import React from 'react';

const testimonials = [
  { name: 'John Doe', text: 'Amazing service!' },
  { name: 'Jane Smith', text: 'Highly recommend this!' },
];

const UserTestimonials = () => {
  return (
    <section style={{ padding: '20px', background: '#f9f9f9' }}>
      <h2>User Testimonials</h2>
      <div>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} style={{ margin: '10px 0', fontStyle: 'italic' }}>
            <p>{testimonial.text}</p>
            <footer>- {testimonial.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default UserTestimonials;