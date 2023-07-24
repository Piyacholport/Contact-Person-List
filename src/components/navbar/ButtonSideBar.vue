<template>
  <div class="white-space"></div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="btn-menu-toggle nav-icon" id="menu-toggle">
      <img src="../../assets/svg/SimpleNavbar.svg" alt="" />
    </button>

    <nav class="navbar bg-light">
      <div class="container-fluid">
        <div class="navbar-brand">
          Contact Person List
          <button type="button" class="btn btn-icon-light">
            <img src="../../assets/svg/Chevrondown.svg" alt="" />
          </button>
        </div>

        <div class="d-flex">
          <button
            type="button"
            class="btn-nav-outline"
            @click="showUploadModal"
          >
            <span class="plus">+</span>Add Contact Person
          </button>
          <button type="button" class="btn-nav-outline">Imported</button>

          <button class="btn-menu-toggle btn-nav-icon">
            <img src="../../assets/svg/Gear.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  </nav>
  <!-- Modal -->
  <!-- <div>
    <div v-if="showUploadModal" class="modal">
      <div class="modal-content">
        <p class="head-modal">Upload JSON File</p>
        <input type="file" ref="fileInput" @change="handleFileUpload" />
        <button @click="closeUploadModal">Close</button>
      </div>
    </div>
  </div> -->
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/umd/popper.min.js";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
export default {
  // data() {
  //   return {
  //     showUploadModal: false,
  //   };
  // },
  mounted() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  },
  // methods: {
  //   openUploadModal() {
  //     this.showUploadModal = true;
  //   },
  //   closeUploadModal() {
  //     this.showUploadModal = false;
  //   },
  //   handleFileUpload(event) {},
  //   addContacts(newContacts) {},
  //   addContactPerson() {
  //     this.contacts = [...this.contacts, ...newContacts];
  //   },

  //   openFileInput() {
  //     this.$refs.fileInput.click();
  //   },
  //   handleFileUpload(event) {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       try {
  //         const jsonData = JSON.parse(reader.result);
  //         if (Array.isArray(jsonData)) {
  //           this.addContacts(jsonData);
  //         } else {
  //           alert("Invalid JSON format: Array expected.");
  //         }
  //       } catch (error) {
  //         alert("Error reading JSON file.");
  //       }
  //     };

  //     if (file) {
  //       reader.readAsText(file);
  //     }
  //   },
  //   addContacts(newContacts) {
  //     this.contacts = [...this.contacts, ...newContacts];
  //   },
  // },
};
</script>
<style>
</style>