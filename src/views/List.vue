<template>
  <div class="applicants">
    <div v-if="applicants.length" class="applicants__list">
      <jf-applicant class="applicants__applicant"
                    v-for="applicant in applicants"
                    :key="applicant.email"
                    :applicant="applicant"/>
    </div>
    <div v-if="!applicants.length" class="applicants__no-applicants">
      No applicants yet.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JfApplicant from '@/components/JfApplicant.vue';

export default {
  name: 'List',
  components: { JfApplicant },
  computed: {
    applicants() {
      return this.$store.state.applicants;
    },
  },
};
</script>
