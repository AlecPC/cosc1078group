<template>
  <div class="animated">
    <div class="row py-5 px-3 bg-light">
      <div class="col">
        <h1>
          Anthony 
        </h1>
        <p style="max-width: 950px">
          My name is Le Do Phuc An and my team’s name is IT Professional. My student number is s3790953. My mail address is s3790953@student.rmit.edu.au. I come from Viet Nam and I enjoy playing soccer, playing guitar, travelling, etc. My interest in IT is studying a whole new language of artificial inventions, fixing problems involving technological devices, getting program operate fluently, IT is the amazing world interacting efficiently with people and this world brings me the passion in exploring, learning, communicating with other people, cultures, I prefer exploring the logical algorithms of computer’s system and it is an awesome feeling when I figure out the logical connections between parts of AI. Up to now, I have some experience in coding simple programs acquired by the curriculum and some small competitions in my high school in Viet Nam.
        </p>
        <h2>Myers-Briggs Test Results</h2>
        <p style="max-width: 950px">
          Thank you for completing our personality test! Here is a copy of your results:
          Personality type: “The Consul” (ESFJ-T)
          Individual traits: Extraverted – 81%, Observant – 84%, Feeling – 56%, Judging – 60%, Turbulent – 61%
          Role: Sentinel
          Strategy: Social Engagement
          Link to your profile: https://www.16personalities.com/profiles/04d4c7c9b5159
        </p>
        <h2>
          The learning style result
        </h2>
        <p style="max-width: 950px">
          Your Scores:
          Auditory: 40%
          Visual: 25%
          Tactile: 35%
          You are an Auditory learner! Check out the information below, or view all of the learning styles.
          Auditory
          If you are an auditory learner, you learn by hearing and listening. You understand and remember things you have heard. You store
          information by the way it sounds, and you have an easier time understanding spoken instructions than written ones. You often learn by
          reading out loud because you have to hear it or speak it in order to know it.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
