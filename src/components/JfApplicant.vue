<template>
  <div class="jf-applicant" ref="applicant">
    <div class="jf-applicant__name">
      {{ applicant.name }}
    </div>
    <div class="jf-applicant__email">
      {{ applicant.email }}
    </div>
    <div class="jf-applicant__skills" ref="skills">
      <div class="jf-applicant__skills-wrapper">
        <span class="jf-applicant__skill jf-applicant__skill--hidden"
              v-for="(skill, index) in applicant.skills" :key="skill.id">
          {{ index !== 0 ? ` + ` : `` }} {{ skill.name  }}
        </span>
      </div>
      <div class="jf-applicant__more jf-applicant__more--hidden"
           :title="hiddenSkillsName"
           v-if="hiddenSkillsCount && hiddenSkillsCount === 1">
        {{ ` + ${hiddenSkillsCount} other`}}
      </div>
      <div class="jf-applicant__more jf-applicant__more--hidden"
           :title="hiddenSkillsName"
           v-if="hiddenSkillsCount && hiddenSkillsCount > 1">
        {{ ` + ${hiddenSkillsCount} others`}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JfApplicant',
  data() {
    return {
      hiddenSkillsCount: 0,
      hiddenSkills: [],
    };
  },
  props: {
    applicant: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        email: '',
        skills: [],
      }),
    },
  },
  methods: {
    getHiddenSkillsCount(containerWidth, containerOffsetLeft) {
      const skillClassName = 'jf-applicant__skill';
      const skills = Array.from(this.$refs.skills.getElementsByClassName(skillClassName));
      return skills.filter((skillElement) => (
        skillElement.offsetLeft + skillElement.offsetWidth >= containerOffsetLeft + containerWidth
      )).length;
    },
    removeHiddenSkills() {
      const skillClassName = 'jf-applicant__skill';
      const skills = Array.from(this.$refs.skills.getElementsByClassName(skillClassName));
      skills.forEach((skillElement, index) => {
        if (skills.length - this.hiddenSkillsCount - 1 < index) {
          this.hiddenSkills.push(this.applicant.skills[index]);
          skillElement.remove();
        }
      });
      this.showHiddenElements();
    },
    showHiddenElements() {
      const skillClassName = 'jf-applicant__skill';
      const moreClassName = 'jf-applicant__more';
      const hiddenSuffix = '--hidden';
      const skills = Array.from(this.$refs.skills.getElementsByClassName(skillClassName));
      const more = Array.from(this.$refs.skills.getElementsByClassName(moreClassName));
      skills.forEach((skillElement) => {
        skillElement.classList.remove(skillClassName + hiddenSuffix);
      });
      more.forEach((moreElement) => {
        moreElement.classList.remove(moreClassName + hiddenSuffix);
      });
    },
  },
  mounted() {
    const skillsClassName = 'jf-applicant__skills-wrapper';
    let containerWidth = parseFloat(window.getComputedStyle(this.$refs.applicant, null).getPropertyValue('width'));
    const containerOffsetLeft = this.$refs.applicant.offsetLeft;
    this.hiddenSkillsCount = this.getHiddenSkillsCount(containerWidth, containerOffsetLeft);
    if (this.hiddenSkillsCount !== 0) {
      setTimeout(() => {
        containerWidth = this.$refs.skills.getElementsByClassName(skillsClassName)[0].offsetWidth;
        this.hiddenSkillsCount = this.getHiddenSkillsCount(containerWidth, containerOffsetLeft);
        this.removeHiddenSkills();
      }, 0);
    } else {
      this.showHiddenElements();
    }
  },
  computed: {
    skills() {
      return this.applicant.skills.map((skill) => (skill.name)).join(' + ');
    },
    hiddenSkillsName() {
      return this.hiddenSkills.map((skill) => (skill.name)).join(' + ');
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables';

  .jf-applicant {
    background-color: $catskill-white-lighter;
    padding: 8px 12px;
    font-size: $font-size-form;
    color: $font-color-form;
    max-width: 300px;
    border: $border-style;
    margin-bottom: 10px;
    &__name {
      color: $body-font-color;
      font-size: $font-size-large;
      font-weight: bold;
    }
    &__email {
      font-size: $font-size-small;
      font-weight: bold;
    }
    &__skills {
      font-size: $font-size-form;
      color: $pelorous;
      display: flex;
    }
    &__skills-wrapper {
      display: flex;
      white-space: nowrap;
      overflow: hidden;
    }
    &__skill {
      padding-right: 5px;
      &--hidden {
        visibility: hidden;
      }
    }
    &__more {
      white-space: nowrap;
      &--hidden {
        visibility: hidden;
      }
    }
  }
</style>
