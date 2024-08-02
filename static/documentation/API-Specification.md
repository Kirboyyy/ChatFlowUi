# API Specification

For developers looking to implement the backend for ChatFlowUi, here’s how the expected POST request should be structured. The request will be sent to your configured backend API.

Our API is built around the OpenAI ChatCompletion API, making it ideal for chat UI development. It offers a seamless, intuitive interface for implementing dynamic conversations, enabling rich, context-aware interactions that enhance user engagement.

## Post Request Structure

The structure of the POST request to your configured backend API is as follows:

```text
    POST Backend URL
    Content-Type: application/json
    {
        "model": "your-model-name", 
        "messages": [
            { "role": "system", "content": "your system prompt here" },
            { "role": "user", "content": "user query" }
            // ...
        ],
        "stream": true 
    }
```

## Dynamic Response Selector

The **Dynamic Response Selector** enables you to easily configure your application's response model with two available strategies: **OpenAI** and **Spring AI**.
Feel free to add some Response Selectors as pull-request!

### Supported Selectors

#### 1. OpenAI Selector
Utilizes the OpenAI ChatCompletion API for intelligent, context-aware responses.
```javascript
data.choices[0].delta.content
```

#### 2. Spring AI Selector
Integrates with `org.springframework.ai.chat.model.ChatResponse` for Spring-AI-based applications.
```javascript
data.result.output.content
```
