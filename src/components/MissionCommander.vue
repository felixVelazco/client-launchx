<template>
<h4>Mission Commander</h4>
  <div v-if="currentMC" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMC.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMC.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMC.mainStack"
        />
      </div>
      <div class="form-group">
        <label for="title">current Enrollment</label>
        <input type="checkbox" disabled class="form-control" id="title"
          v-model="currentMC.currentEnrollment"
        />
      </div>
      <div class="form-group">
        <label for="title">Azure Certification</label>
        <input type="checkbox" disabled class="form-control" id="title"
          v-model="currentMC.hasAzureCertification"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteMissionCommander">
      Eliminar Mission Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMissionCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un mission Commander. </p>
  </div>
</template>

<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "missionCommander",
  data(){
    return {
      currentMC: null,
      message: ""
    };
  },
  methods: {
    getMissionCommander(id){
      MissionCommanderService.get(id)
        .then(response => {
          this.currentMC = response.data;
        }).catch(e => {
          console.log(e);
        });
    },
    deleteMissionCommander() {
      MissionCommanderService.delete(this.currentMC.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({name: "mission-commanders"});
        }).catch(e => {
          console.log(e);
        })
    },
    updateMissionCommander() {
      MissionCommanderService.update(this.currentMC.id, this.currentMC)
        .then(response => {
          console.log(response.data);
          this.message = "Se actualizó correctamente";
        }).catch(e => {
          console.log(e);
        })
    }
  },
  mounted() {
    this.message = "";
    this.getMissionCommander(this.$route.params.id);
  }
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>