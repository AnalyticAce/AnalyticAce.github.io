# Copilot Instructions - Best Development Practices

## Core Development Principles

### Code Quality & Standards

- Write clean, readable, and maintainable code following industry best practices
- Use meaningful variable and function names that clearly express intent
- Follow consistent naming conventions (camelCase for JS/TS, snake_case for Python, etc.)
- Implement proper error handling and validation
- Write comprehensive unit tests for all new functionality
- Document complex logic with clear comments explaining the "why", not just the "what"
- Follow the DRY (Don't Repeat Yourself) principle
- Use design patterns appropriately (SOLID principles, Factory, Observer, etc.)

### Architecture & Design

- Follow separation of concerns and single responsibility principle
- Use dependency injection for better testability and modularity
- Implement proper layered architecture (presentation, business logic, data access)
- Use appropriate data structures and algorithms for optimal performance
- Design for scalability and maintainability from the start
- Implement proper caching strategies where appropriate

### Security Best Practices

- Validate and sanitize all user inputs
- Use parameterized queries to prevent SQL injection
- Implement proper authentication and authorization
- Store sensitive data securely (encrypted at rest and in transit)
- Follow the principle of least privilege
- Keep dependencies updated and scan for vulnerabilities

### Performance Optimization

- Write efficient algorithms with appropriate time and space complexity
- Use lazy loading and pagination for large data sets
- Implement proper database indexing and query optimization
- Use caching mechanisms (Redis, in-memory cache) where appropriate
- Optimize bundle sizes and implement code splitting for web applications
- Monitor performance metrics and set up alerts

### Framework-Specific Guidelines

#### React/Next.js

- Use functional components with hooks instead of class components
- Implement proper state management (useState, useReducer, or external stores)
- Use React.memo, useMemo, and useCallback for performance optimization
- Follow React best practices for component composition
- Implement proper error boundaries
- Use Next.js features like SSR, SSG, and API routes appropriately

#### Node.js/Express

- Use middleware for cross-cutting concerns (logging, authentication, etc.)
- Implement proper request validation using libraries like Joi or Yup
- Use connection pooling for database connections
- Implement proper rate limiting and security headers
- Use clustering for better performance in production

#### Python

- Follow PEP 8 style guidelines
- Use virtual environments for dependency management
- Implement proper exception handling with specific exception types
- Use type hints for better code documentation and IDE support
- Follow Pythonic conventions (list comprehensions, context managers, etc.)

### Git & Version Control

- Write clear, descriptive commit messages following conventional commits
- Use feature branches and pull requests for code review
- Keep commits atomic and focused on single changes
- Use meaningful branch names that describe the feature or fix
- Squash commits before merging to keep history clean
