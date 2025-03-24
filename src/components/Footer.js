+import React from 'react';
+import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
+
+/**
+ * Footer component with social links and copyright information
+ */
+const Footer = () => {
+  const currentYear = new Date().getFullYear();
+
+  // Social media links
+  const socialLinks = [
+    {
+      name: 'GitHub',
+      icon: <Github size={20} />,
+      url: 'https://github.com/yourusername'
+    },
+    {
+      name: 'LinkedIn',
+      icon: <Linkedin size={20} />,
+      url: 'https://linkedin.com/in/yourusername'
+    },
+    {
+      name: 'Twitter',
+      icon: <Twitter size={20} />,
+      url: 'https://twitter.com/yourusername'
+    },
+    {
+      name: 'Email',
+      icon: <Mail size={20} />,
+      url: 'mailto:your.email@example.com'
+    },
+  ];
+
+  return (
+    <footer className="bg-secondary-100 dark:bg-secondary-800 py-8">
+      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+        <div className="flex flex-col md:flex-row justify-between items-center">
+          <div className="mb-4 md:mb-0">
+            <p className="text-secondary-600 dark:text-secondary-400">
+              � {currentYear} Your Name. All rights reserved.
+            </p>
+          </div>
+
+          <div className="flex space-x-4">
+            {socialLinks.map((link) => (
+              <a
+                key={link.name}
+                href={link.url}
+                target="_blank"
+                rel="noopener noreferrer"
+                className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
+                aria-label={link.name}
+              >
+                {link.icon}
+              </a>
+            ))}
+          </div>
+        </div>
+      </div>
+    </footer>
+  );
+};
+
+export default Footer;
