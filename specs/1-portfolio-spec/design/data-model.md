# Data Model: Personal Portfolio CLI Tool

## Entities

### Project
| Field | Type | Validation |
|-------|------|------------|
| `id` | UUID/Slug | Required, unique |
| `title` | String | Required, max 100 chars |
| `description` | String | Required |
| `techStack` | String[] | Min 1 tag |
| `links` | Object | `{ live?: URL, repo?: URL }` |
| `image` | URL/Path | Required |
| `category` | String | "AI/ML", "Web", "Mobile", etc. |

### Skill
| Field | Type | Validation |
|-------|------|------------|
| `name` | String | Required, unique |
| `level` | Number | 0-100 |
| `icon` | String | SVG path or Icon Name |
| `category` | Enum | "Frontend", "Backend", "AI/ML", "Tools" |

### Configuration (portfolio.config.ts)
| Field | Type | Description |
|-------|------|-------------|
| `personalInfo` | Object | Name, Role, Bio, Social links |
| `theme` | Object | Palette overrides, Typography choices |
| `deployment` | Object | Vercel Project ID, Resend API Key |

## Relationships
- A **Project** has many **TechStack** tags.
- A **Skill** belongs to a **Category**.
- **Configuration** governs the global state of both the CLI and Web App.
