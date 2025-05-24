
export  const  HandleAiInputFunction = async (input) => {
    console.log(input)
    console.log("fucntion started")
    
    try {
        console.log("loading")
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",
                "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
                "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "deepseek/deepseek-r1:free",
                "messages": [{ "role": "user", "content": input }
                ]
            })
        });
        const data = await response.json();
        console.log(data.choices?.[0]?.message?.content)
        console.log("error is:",data)
        if(data.choices?.[0]?.message?.content){
            return data.choices?.[0]?.message?.content
        }
        if(data.error || data.error.message ) return data.error.message || "error in deepseek ai api"
        return "Something went wrong"
        setOutput(data.choices?.[0]?.message?.content)
    } catch (error) {
        console.log(error)
        return "error in ai-bot function"
    }

    // setLoading(false)
    // setInput('')
}


HandleAiInputFunction("what is java")