import React from "react";

export default function Manifesto({ setIsManifestoScreen }) {
  return (
    <div className="flex flex-col w-full min-h-dvh !overflow-y-auto scroll  items-center py-10 lg:py-[80px] px-5 lg:px-[6%]">
      <div className="w-full mb-8 flex items-center justify-between">
        <h1 className="text-4xl drop-shadow-[0_0_3px_#EFBF04]">
          THE EVOLUTION OF AI AGENTS
        </h1>
        <p
          className="cursor-pointer"
          onClick={() => setIsManifestoScreen(false)}
        >
          Close
        </p>
      </div>
      <div className="text-md px-3 py-2 rounded-xl border lg:h-full h-[70vh] overflow-y-auto border-black bg-[#e3e3d7]">
        <p className="normal-font">
          AI is entering a new era where conversational agents go beyond basic
          interactions to deliver real, dynamic, and emotionally aware
          conversations. Unlike AI agents like Truth Terminal and Zerebro, which
          rely solely on text-based interactions, Disciple AI takes
          conversational AI to the next level. While those systems are limited
          to written responses, Disciple AI integrates facial animation, emotion
          recognition, and speech synthesis, allowing agents to respond in
          real-time with facial expressions, moods, and a natural tone of voice.
          This creates a fully interactive, human-like experience.
          <br />
          <br />
          Built on OpenAI’s GPT architecture, Disciple AI combines the power of
          advanced natural language processing (NLP) and machine learning (ML)
          with emotion detection and real-time facial animation. These agents
          don’t just answer questions—they understand context, tone, and subtle
          emotional cues, making conversations feel authentic, adaptive, and
          emotionally intelligent.
          <br />
          <br />
          Whether in customer service, social media, or other digital spaces,
          these agents can engage in ongoing, meaningful dialogues that scale to
          millions of users, all while maintaining a deeply personal connection.
          Unlike text-only platforms, Disciple AI agents bring real-time
          empathy, emotional depth, and dynamic interaction to every
          conversation.
          <br />
          <br />
          With Disciple AI, we’re setting a new standard for conversational
          agents—where conversations are not just functional, but deeply
          engaging and human-like.
          <br />
          <br />
          Join us and build the future of AI agents with us.
        </p>
      </div>
    </div>
  );
}
