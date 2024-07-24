<script>
</script>

<div class="max-w-4xl mx-auto py-12 px-6">
    <h1 class="text-3xl font-semibold mb-6">
        API Specification for Developers
    </h1>
    <p class="mb-8 text-lg">
        For developers looking to implement the backend for OmniChatUi, here’s
        how the expected POST request should be structured. The request will be
        sent to your configured backend API.
    </p>
    <p class="mb-8 text-lg">
        Our API is built around the OpenAI ChatCompletion API, making it ideal
        for chat UI development. It offers a seamless, intuitive interface for
        implementing dynamic conversations, enabling rich, context-aware
        interactions that enhance user engagement.
    </p>

    <h2 class="text-xl font-semibold mb-4">POST Request Structure</h2>
    <pre class="bg-code px-4 rounded-md text-sm mb-8">
<code class="whitespace-pre-wrap">
POST Backend URL
Content-Type: application/json
&lbrace;
    "model": "your-model-name", 
    "messages": [
        &lbrace; "role": "system", "content": "your system prompt here" &rbrace;,
        &lbrace; "role": "user", "content": "user query" &rbrace;
        // ...
    ],
    "stream": true 
}
</code>
    </pre>

    <hr />

    <h2 class="text-2xl font-semibold my-4">Response Structure</h2>
    <p class="mb-8 text-lg">
        OmniChatUi is equipped to support two distinct response strategies,
        configurable from the control panel under the "Response Strategy"
        section. This versatility empowers developers to choose the strategy
        that aligns best with their application requirements.
    </p>

    <h3 class="text-xl font-semibold mb-2">1. OpenAiStrategy</h3>
    <p class="mb-4 text-lg">
        <strong>Description:</strong> The <strong>OpenAiStrategy</strong> utilizes
        the OpenAI ChatCompletion API to generate responses. This strategy harnesses
        the capabilities of OpenAI's model for creating engaging and contextually
        relevant interactions.
    </p>
    <p class="mb-4 text-lg">
        <strong>Accessing Response:</strong>
        <br />
        Developers can obtain the response text via the
        <code class="text-blue-600 font-semibold">getText()</code>
        method. It returns:
    </p>
    <pre class="bg-code p-2 rounded mt-2"><code
            >data.choices[0].delta.content</code
        ></pre>
    <p class="mb-4 text-lg">
        <strong>Streaming Capabilities:</strong> This method allows for the ongoing
        update of messages, providing users with real-time responses that reflect
        the developing nature of their conversation.
    </p>

    <h3 class="text-xl font-semibold mb-2">2. SpringAI</h3>
    <p class="mb-4 text-lg">
        <strong>Description:</strong> The <strong>SpringAI</strong> strategy
        integrates with
        <code class="text-blue-600 font-semibold"
            >org.springframework.ai.chat.model.ChatResponse</code
        >, offering seamless compatibility with Spring-AI applications. This
        option is ideal for applications built within the Spring framework,
        enabling chat functionalities that are cohesive with the existing
        architecture.
    </p>
    <p class="mb-4 text-lg">
        <strong>Accessing Response:</strong>
        <br />
        The response text can similarly be accessed using the
        <code class="text-blue-600 font-semibold">getText()</code>
        method:
    </p>
    <pre class="bg-code p-2 rounded mt-2"><code>data.result.output.content</code
        ></pre>
    <p class="mb-4 text-lg">
        <strong>Streaming Capabilities:</strong> Just like the OpenAiStrategy, this
        method supports the dynamic streaming of messages, allowing for efficient
        real-time interactions between users and the system.
    </p>
</div>
