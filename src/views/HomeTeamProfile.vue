<template>
  <div class="animated">
    <div class="row px-5 py-5 bg-light">
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

        <h2>
          The hobby test result
        </h2>
        <p>
          You got: Computer programming
          Programming can be an intimidating hobby, but if you want to challenge yourself and also acquire a useful skill, it’s a great thing
          to do! There’s plenty of spaces online where you can teach yourself for free, as well as paid courses you can attend depending
          on how much you want to spend.

        </p>
      </div>
    </div>
    <div class="row px-5 py-5 bg-dark">
      <div class="col">
        <h1>Samuel</h1>
        <h3 style="font-weight: 100">I'm a student, developer, beach lifeguard.</h3>
        <br />
        <p class="lead">
          Originally from Sydney, moved to Melbourne in 2007
          <i
            title="au"
            id="au"
            class="flag-icon flag-icon-au"
          ></i> I've always had a passion for developing things 👨🏼‍💻 in particular software. My IT interested started originally from a young age with 🛠 tweaking with Windows Servers etc. and eventually growing from there.
        </p>
        <p
          class="lead"
        >I now work as a 📲 Software Developer for Life Saving Victoria and 💼 consult independently for a few different companies with their 📈 Digital Stategies and bespoke software products. Whilst alot of my 💡 knowledge in this area was self taught, it is through my employment at Life Saving Victoria where I have developed extensive knowledge in building 📟 REST based APIs, architecting ☁️ serveless infrastructure on AWS, designing 👾 automated build and deploy (CI/CD) pipelines for the software, and the 💻 front end interfaces to integrate with it.</p>
        <p class="lead">
          As a hobby I also am a 🏖 beach/jetski lifeguard and now Lifeguard Communications Supervisor 🆘 which involves managing incidents from all the beaches accross the state. In my down time I also take my 🔐 information security and 👤 privacy so seriously – I have a 16RU server rack at my place of which contains my Unifi Security Gateway, Unifi Switches, and 2 Dell PowerEdge Servers (1 for ESXi and 1 for Storage). All in an effort to route my traffic via
          <i
            title="ch"
            id="ch"
            class="flag-icon flag-icon-ch"
          ></i> Switzerland and secure 🔑 my personal data.
        </p>
        <h2
          style="font-weight: 100"
        >Below are the Myers-Briggs test, learning style test, and emotional intelligence test results. These tests are important to show how my personality would fit within a workplace environment both in regards to my own efficency and the workplace culture.</h2>
        <br />
        <div class="card-deck">
          <div class="card">
            <img src="/img/test1.png" class="card-img-top" alt="..." />
          </div>
          <div class="card">
            <img src="/img/test2.png" class="card-img-top" alt="..." />
          </div>
          <div class="card">
            <img src="/img/test3.png" class="card-img-top" alt="..." />
          </div>
        </div>
        <br>
        <p class="lead col-md-7 px-0">The above results show I'm a very logical thinker and have a measured approach to problems whilst being very confident about my opinions. They also show I'm aware of my actions and how they effect others. In a team evnrionemnt its important I consider the views and thoughts of others and try to not to suppress ideas by overly advocating my own.</p>
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
