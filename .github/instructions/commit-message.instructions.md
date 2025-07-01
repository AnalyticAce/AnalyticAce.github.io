# Version Control Guidelines and Best Practices

## Commit Message Format
```
<type>(<scope>): <subject>

[optional detailed description]

[optional footer]
```

## Core Rules
1. First line: max 72 characters
2. Make atomic commits (one logical change)
3. Reference issue IDs (e.g., GH-123)
4. Breaking changes: use `BREAKING CHANGE:` in footer
5. Use imperative mood (e.g., "Add feature" not "Added feature")
6. Use lowercase for type and scope
7. Separate subject from body with a blank line

## Types
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `perf`: Performance
- `test`: Testing
- `chore`: Maintenance
- `ci`: CI/CD changes
- `revert`: Reverting changes

## Scope Guidelines
- Module/component name (`auth`, `api`)
- `*` for multi-module changes
- Optional but recommended

## Branch Naming
```
<type>/<issue-id>-<description>
Example: feature/AUTH-123-oauth-login
```
Types: feature/, bugfix/, hotfix/, release/, docs/

## Examples
```
feat(auth): implement OAuth2 flow
fix(api): correct 500 error handling
docs(readme): update deployment steps
perf(queries): optimize search (+50% speed)
```

## Pre-Push Checklist
- ✓ Tests passing
- ✓ Code style compliant
- ✓ No secrets/credentials
- ✓ Valid commit messages
- ✓ Issue references included
- ✓ Documentation updated

For detailed guidelines, see [Conventional Commits](https://www.conventionalcommits.org/)