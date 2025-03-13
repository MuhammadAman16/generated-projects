+import React from 'react';
+import { motion } from 'framer-motion';
+import './About.css';
+import profileImage from '../../assets/profile.jpg';
+
+const About = () => {
+  return (
+    <section id="about" className="about">
+      <motion.h2
+        className="section-title"
+        initial={{ opacity: 0, y: 20 }}
+        whileInView={{ opacity: 1, y: 0 }}
+        viewport={{ once: true }}
+        transition={{ duration: 0.5 }}
+      >
+        About Me
+      </motion.h2>
+
+      <div className="about-content">
+        <motion.div
+          className="about-text"
+          initial={{ opacity: 0, x: -50 }}
+          whileInView={{ opacity: 1, x: 0 }}
+          viewport={{ once: true }}
+          transition={{ duration: 0.5, delay: 0.2 }}
+        >
+          <p className="about-description">
+            Hello! I'm John, a passionate MERN stack developer based in New York City. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
+          </p>
+          <p className="about-description">
+            My interest in web development started back in 2015 when I decided to try creating a custom Tumblr theme � turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
+          </p>
+          <p className="about-description">
+            Fast-forward to today, and I've had the privilege of working at a start-up, a large corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
+          </p>
+          <p className="about-description">
+            When I'm not at the computer, I'm usually rock climbing, hiking, or exploring new coffee shops in the city.
+          </p>
+        </motion.div>
+
+        <motion.div
+          className="about-image-container"
+          initial={{ opacity: 0, x: 50 }}
+          whileInView={{ opacity: 1, x: 0 }}
+          viewport={{ once: true }}
+          transition={{ duration: 0.5, delay: 0.4 }}
+        >
+          <img src={profileImage} alt="John Doe" className="about-image" />
+          <div className="about-image-border"></div>
+        </motion.div>
+      </div>
+    </section>
+  );
+};
+
+export default About;
