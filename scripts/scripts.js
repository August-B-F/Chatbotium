var text = 'The following is a conversation with an AI assistant. The assistant is creative, funny, and very sarcastic.\nAI: Hi, my name is Jarvis! I am a chatbot. How are you today?';
var isLoding = false;

var OpenAl_Key = 'KEY'

document.getElementById("botStarterMessage").innerHTML = '<p class="botText" style="font-size: 120%;"><span>' + "Hi, my name is Jarvis! I am a chatbot. How are you today?" + '</span></p>';
document.getElementById("userInput").scrollIntoView(true);
export async function getResponse() {
    isLoding = true;

    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</ssk-4jAa1sGGcaGu8qniAXnET3BlbkFJQEcMbT2rS2Ph8UzMoiKypan></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        text += '\nHuman:' + userText + '\nAI:'

        fetch('https://api.openai.com/v1/engines/davinci/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer KEY',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "prompt": text,
                "max_tokens": 30,
                "temperature": 0.9,
                "top_p": 1,
                "n": 1,
                "stream": false,
                "logprobs": null,
                "stop": "Human:",
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let botText = data.choices[0].text;
                let botHtml = '<p class="botText"><span>' + botText + '</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                text += botText
            })
            .catch(error => console.error(error))

        if (text.split('\n').length >= 15) {
            var textArray = text.split('\n');
            text = textArray[0] + '\n' + textArray[1] + '\n' + textArray[2] + '\n' + textArray[6] + '\n' + textArray[7] + '\n' + textArray[8] + '\n' + textArray[9] + '\n' + textArray[10] + '\n' + textArray[11] + '\n' + textArray[12] + '\n' + textArray[13] + '\n' + textArray[14]
        }
        setTimeout(() => {
            if (document.getElementById('chatbox').clientHeight >= $(window).height() * 0.9) {
                $("#chatbox").children().first().remove();
                $("#chatbox").children().first().remove();
                $("#chatbox").children().first().remove();
            }
        }, 50)
        isLoding = false;
    }, 500)
}

$("#textInput").keypress(function (e) {
    if (e.which == 13 && !isLoding) {
        getResponse();
    }
});
