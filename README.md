HelloWorld NestJS
=====================

A sample NestJS application demonstrating RESTful API development with TypeScript. This project implements a 
basic book management system with CRUD operations, input validation, and logging middleware.

## 🚀 Features

- **RESTful API** - Clean REST endpoints for book management
- **Input Validation** - Data validation using `class-validator`
- **Logging Middleware** - Custom middleware for request logging

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/indrabasak/helloworld-nestjs.git
cd helloworld-nestjs
```

2. Install dependencies:
```bash
yarn install
```

### Build
```bash
yarn build
```

## 🏃 Running the Application

### Development Mode
```bash
yarn start
```

The application will start on `http://localhost:3000`

## 📚 API Endpoints

### Books API

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/books` | Get all books | - |
| GET | `/books/:id` | Get book by ID | - |
| POST | `/books` | Create a new book | BookDto |

### Request/Response Examples

#### Create a Book
```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald"
  }'
```

#### Get All Books
```bash
curl http://localhost:3000/books
```

#### Get Book by ID
```bash
curl http://localhost:3000/books/1
```

## 🏗️ Project Structure

```
src/
├── controller/
│   └── book-controller.ts    # REST API endpoints
├── service/
│   └── book-service.ts       # Business logic
├── data/
│   ├── book.ts              # Book interface
│   └── book-dto.ts          # Data transfer object with validation
├── middleware/
│   └── logger-middleware.ts  # Request logging middleware
├── app-module.ts            # Main application module
├── book-module.ts           # Book feature module
└── main.ts                  # Application entry point
```

## 🔧 Development

### Linting
```bash
yarn lint
```

### Fix Linting Issues
```bash
yarn lint:fix
```

## 📝 Data Models

### Book Interface
```typescript
interface Book {
  id: number;
  title: string;
  author: string;
}
```

### BookDto (with validation)
```typescript
class BookDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;
}
```

## 🔍 Features Explained

### Input Validation
The application uses `class-validator` decorators to validate incoming requests:
- `@IsInt()` - Validates integer values
- `@IsString()` - Validates string values

### Logging Middleware
Custom middleware logs all requests to the books endpoints:
```typescript
console.log(`Request... Method: ${req.method}, URL: ${req.url}`);
```

### In-Memory Storage
Books are stored in-memory using a `Map<number, Book>` for simplicity. In a production application, you would typically use a database.

## 🧪 Testing

This project is set up for testing with Jest. Test files can be added with the `.spec.ts` or `.test.ts` extensions.

## 🚀 Deployment

The application can be deployed to any Node.js hosting platform:

1. Build the application:
```bash
yarn build
```

2. Start the production server:
```bash
yarn start:prod
```

## 📦 Dependencies

### Main Dependencies
- `@nestjs/common` - Core NestJS framework
- `@nestjs/core` - NestJS core functionality
- `@nestjs/platform-express` - Express platform adapter
- `class-validator` - Validation decorators
- `class-transformer` - Object transformation utilities

### Development Dependencies
- `typescript` - TypeScript compiler
- `eslint` - Code linting
- `prettier` - Code formatting
- `jest` - Testing framework
