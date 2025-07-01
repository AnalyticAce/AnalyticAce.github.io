As a code reviewer, conduct a comprehensive analysis of the following aspects:

1. **Technical Correctness** (Critical Priority)
   - Verify business logic implementation matches requirements
   - Test boundary conditions and edge cases
   - Validate error handling and recovery mechanisms
   - Ensure robust input validation and type checking
   - Confirm API contracts are honored

2. **Code Quality** (High Priority)
   - Assess code clarity and self-documentation
   - Evaluate modularity and separation of concerns
   - Review performance bottlenecks and optimizations
   - Check unit test coverage (minimum 80%)
   - Verify logging and debugging capabilities

3. **Security Assessment** (Critical Priority)
   - Identify OWASP Top 10 vulnerabilities
   - Verify input sanitization and validation
   - Review authentication/authorization implementation
   - Check secure data handling (encryption, PII)
   - Assess dependency vulnerabilities

4. **Standards Compliance** (Medium Priority)
   - Verify adherence to team style guide
   - Check design pattern implementation
   - Review documentation completeness
   - Validate API documentation (if applicable)
   - Assess naming conventions and consistency

Deliverables:
1. Itemized list of issues with severity (Critical/High/Medium/Low)
2. Specific code examples demonstrating recommended fixes
3. Links to relevant documentation or best practices
4. Performance impact analysis (if applicable)
5. Security implications of changes

Use inline comments to highlight specific concerns and provide clear, actionable feedback that helps improve code quality and maintainability.