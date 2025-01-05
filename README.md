# Sharathbeesu-Analytics-Vidhya-Course-Search
The goal of this project is to create a search tool that helps users find the most relevant free courses available on the Analytics Vidhya platform. The tool uses embeddings to represent course descriptions and natural language queries, enabling accurate search results. The tool is built using the following components:

Web Scraping: Extract course details such as titles, descriptions, and links from the Analytics Vidhya platform.
Preprocessing: Clean the scraped data by removing unwanted characters and normalizing the text.
Embeddings: Use Sentence Transformers to generate embeddings for course descriptions.
FAISS: Store the embeddings in a vector database for fast retrieval.
Search Functionality: Implement a search function to match user queries with the most relevant courses based on semantic similarity.
Deployment: Deploy the tool on Huggingface Spaces using Gradio for an interactive UI.

Search Implementation Methodology
Architecture Overview
Frontend Implementation

React-based UI with TypeScript
Tailwind CSS for styling
Component-based architecture with clear separation of concerns
Search Features

Real-time search with debouncing
Filtering capabilities
Grid-based results display
Responsive design
Data Management

Custom hooks for search logic
Type-safe data handling with TypeScript
Centralized state management
Key Components
Search Bar

Debounced input handling
Clean query management
Accessibility considerations
Filters

Dynamic filter options
Multi-select capability
Clear filter state management
Results Display

Grid layout for courses
Responsive card design
Efficient rendering
