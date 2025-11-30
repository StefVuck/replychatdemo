<script>
  let testimonials = [
    { name: 'Alice', feedback: 'Amazing tool for collaboration!' },
    { name: 'Bob', feedback: 'Love the Kanban features!' }
  ];
</script>

<style>
  .cta-button { background-color: #ff5722; color: white; padding: 10px 20px; border: none; cursor: pointer; }
  .section { padding: 20px; text-align: center; }
</style>

<div class="section">
  <h1>Welcome to ReplyChat</h1>
  <p>Experience seamless multi-user chat rooms and efficient project management.</p>
  <button class="cta-button">Get Started</button>
</div>

<div class="section">
  <h2>User Testimonials</h2>
  {#each testimonials as testimonial}
    <blockquote>
      <p>{testimonial.feedback}</p>
      <cite>- {testimonial.name}</cite>
    </blockquote>
  {/each}
</div>

<div class="section">
  <h2>Features</h2>
  <ul>
    <li>Multi-user chat rooms</li>
    <li>Kanban project management</li>
  </ul>
</div>