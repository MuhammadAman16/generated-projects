#!/bin/bash

# Create the script file
cat > run_portfolio.sh << 'EOF'
#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Run the application
echo "Starting the application..."
npm start
EOF

# Make the script executable
chmod +x run_portfolio.sh

# Run the script
./run_portfolio.sh
