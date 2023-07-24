<template>
  <div class="Rectangle-310">
    <div class="header-text"><b> Filter Data: </b>&nbsp; Costomer 2021</div>
    <div class="">
      <button class="btn-icon-gray">
        <img src="../assets/svg/Union.svg" alt="" />
      </button>
      <div class="btn-group btn-dropdown">
        <span class="btn btn-white">
          <img src="../assets/svg/Edit.svg" alt=""
        /></span>
        <button
          type="button"
          class="btn btn-white"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="../assets/svg/Chevrondownbold.svg" alt="" />
        </button>
        <ul class="dropdown-menu">
          <li data-toggle="modal" data-target="#exampleModalCenter">
            <div class="" @click="openModal">
              <button class="dropdown-item">
                <span class="icon-dropdown">
                  <img src="../assets/svg/SelectDisplay.svg" alt=""
                /></span>
                Select to display
              </button>
            </div>
          </li>
          <li>
            <a class="dropdown-item" href="#"
              ><span class="icon-dropdown"
                ><img src="../assets/svg/Filter.svg" alt="" /></span
              >Filter</a
            >
          </li>

          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#" @click="removeFilter"
              ><span class="icon-dropdown trash-icon"
                ><img src="../assets/svg/Trash.svg" alt="" /></span
              >Delete this Filter</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="body">
    <div class="tables">
      <table>
        <thead>
          <tr>
            <th v-for="field in displayFields" :key="field.label">
              {{ field.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in paginatedContacts" :key="contact.Name">
            <td v-for="field in displayFields" :key="field.label">
              <template v-if="field.label === 'Name'">
                <img :src="Avatar" alt="" class="img-avatar" />
              </template>
              {{ contact[field.label] }}
            </td>
            <td>
              <div class="">
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  class="btn-more color-button icon-button"
                  @click="toggleIcon"
                >
                  <img src="../assets/svg/More.svg" alt="" />
                </button>
                <ul class="dropdown-menu">
                  <li class="li-list-dropdown">
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="editContact(contact)"
                      ><img
                        src="../assets/svg/Pencil.svg"
                        alt=""
                        class="list-icon"
                      />
                      Edit</a
                    >
                  </li>
                  <li class="li-list-dropdown">
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="deleteContact(contact)"
                      ><img
                        src="../assets/svg/Trash.svg"
                        alt=""
                        class="trash-icon list-icon"
                      />
                      Delete</a
                    >
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination">
      <div class="">
        <ul class="pagination">
          <li>
            <button class="btn-paginate flex" @click="goToFirstPage">
              <img :src="Previous" alt="" class="" />
              <img :src="Previous" alt="" class="" />
            </button>
          </li>
          <li>
            <button class="btn-paginate" @click="goToPreviousPage">
              <img :src="Previous" alt="" class="img-paginate" />
            </button>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
          >
            <a :class="{ active: currentPage === page }" class="currentPage">{{
              page
            }}</a>
          </li>

          <li>
            <button class="btn-paginate" @click="goToNextPage">
              <img :src="Next" alt="" class="img-paginate" />
            </button>
          </li>
          <li>
            <button class="btn-paginate flex" @click="goToLastPage">
              <img :src="Next" alt="" class="" />
              <img :src="Next" alt="" class="" />
            </button>
          </li>
        </ul>
      </div>
      <div class="items-per-page">
        <select
          class="select-items-per-page"
          v-model="itemsPerPage"
          @change="changeItemsPerPage($event.target.value)"
        >
          <option v-for="option in [25, 50, 75]" :value="option" :key="option">
            {{ option }}
          </option>
        </select>
        <span class="text-select-page">
          Display {{ firstNumPage }}-{{ lastNumPage }} from {{ totalContacts }}
        </span>
      </div>
    </div>
  </div>
  <!-- M O D A L -->
  <div class="modal1">
    <div>
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <div class="div-head-modal">
            <p class="head-modal">Select the fields to display</p>
            <button @click="closeModal" class="btn-close"></button>
          </div>
          <div class="div-content-modal">
            <div>
              <p class="head-modal">Column Info</p>
              <div
                v-for="(field, index) in selectedFields"
                :key="index"
                class="feilds-input"
              >
                <div class="flex">
                  <img src="../assets/svg/Column.svg" alt="" class="right"/>
       
                  <div class="form-check checkbox-lg flex">
                    <input
                      class="form-check-input checkbox-input left"
                      type="checkbox"
                      value=""
                      v-model="field.checked"
                      :id="'field-' + index"
                    />
                    <label class="form-check-label left label-check">
                      {{ field.label }}
                    </label>
                  </div>
                </div>
                <div class="">
                  <button @click="removeField(index)" class="btn-close-size">
                    <img src="../assets/svg/Mclose.svg" alt="" />
                  </button>
                </div>
              </div>
              <div class="div-btn-add-feild">
                <button @click="openModal2" class="btn-add-feild">
                  <span class="plus">+</span>Add Feild
                </button>
              </div>
            </div>
          </div>

          <div class="btn-group-modal">
            <button @click="save" class="btn-modal-save">save</button>
            <button @click="closeModal" class="btn-modal-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal2">
    <div>
      <div v-if="showModal2" class="modal">
        <div class="modal-content">
          <div class="div-head-modal">
            <p class="head-modal">Select the fields to display</p>
            <button @click="closeModal2" class="btn-close"></button>
          </div>
          <div class="div-content-modal">
            <div>
              <p class="head-modal">Column Info</p>
              <div
                v-for="(field, index) in additionalFields"
                :key="index"
                class="feilds-input"
              >
                <div class="flex">
                  <div class="form-check checkbox-lg flex">
                    <input
                      class="form-check-input checkbox-input left"
                      type="checkbox"
                      value=""
                      v-model="field.checked"
                      :id="'field-' + index"
                    />
                    <label class="form-check-label left label-check">
                      {{ field.label }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="btn-group-modal">
            <button @click="addFields" class="btn-modal-save">ok</button>
            <button @click="closeModal2" class="btn-modal-cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal3">
    <div class="modal" v-if="showEditModal">
      <div class="modal-content">
        <h2>Edit Contact</h2>
        <form @submit="submitEdit">
          <label for="editName">Name:</label>
          <input type="text" v-model="editData.Name" id="editName" />

          <label for="editCompany">Company:</label>
          <input type="text" v-model="editData.Company" id="editCompany" />

          <label for="editMobile">Mobile Number:</label>
          <input
            type="text"
            v-model="editData['Mobile Number']"
            id="editMobile"
          />

          <button type="submit">Submit</button>
          <button type="button" @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Avatar from "../assets/svg/Avatar.svg";
import Previous from "../assets/svg/Previous.svg";
import Next from "../assets/svg/Next.svg";
import contactsData from "../json/contact.json";

export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 25,
      Avatar: Avatar,
      Previous: Previous,
      Next: Next,
      contacts: contactsData,
      showModal: false,
      showModal2: false,
      showEditModal: false,
      editData: {
        Name: "",
        Company: "",
        "Mobile Number": "",
      },
      editIndex: -1,
      displayFields: [
        { label: "Name", checked: true },
        { label: "Company", checked: true },
        { label: "Email", checked: true },
        { label: "Mobile Number", checked: true },
      ],
      selectedFields: [
        { label: "Name", checked: true },
        { label: "Company", checked: true },
        { label: "Email", checked: true },
        { label: "Mobile Number", checked: true },
      ],
      additionalFields: [
        { label: "Industrial", checked: false },
        { label: "Source", checked: false },
        { label: "Owner", checked: false },
        { label: "Add Date", checked: false },
        { label: "Edit Date", checked: false },
        { label: "Status", checked: false },
        { label: "Website", checked: false },
        { label: "Activity", checked: false },
        { label: "Telephone", checked: false },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.contacts.length / this.itemsPerPage);
    },
    paginatedContacts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.contacts.slice(startIndex, endIndex);
    },
    firstNumPage() {
      if (this.totalPages === 0) {
        return 0;
      }
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    lastNumPage() {
      const lastNum = this.currentPage * this.itemsPerPage;
      return lastNum > this.contacts.length ? this.contacts.length : lastNum;
    },
    totalContacts() {
      return this.contacts.length;
    },
    displayFields() {
      return this.selectedFields.filter((field) => field.checked);
    },
  },
  methods: {
    paginateContacts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.contacts.slice(startIndex, endIndex);
    },
    changeItemsPerPage(value) {
      this.itemsPerPage = value;
      this.updateCurrentPage();
    },
    updateCurrentPage() {
      this.currentPage = 1;
    },
    goToFirstPage() {
      this.currentPage = 1;
    },
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToLastPage() {
      this.currentPage = this.totalPages;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    openModal2() {
      this.showModal2 = true;
    },
    closeModal2() {
      this.showModal2 = false;
    },
    removeField(index) {
      this.selectedFields.splice(index, 1);
    },
    addFields() {
      this.additionalFields.forEach((field) => {
        if (field.checked) {
          this.selectedFields.push({ label: field.label, checked: true });
        }
      });
      this.showModal2 = false;
    },
    save() {
      this.showModal = false;
      const selectedFieldsNames = this.selectedFields
        .filter((field) => field.checked)
        .map((field) => field.label);
      this.displayFields = this.contacts.map((contact) => {
        const selectedData = {};
        selectedFieldsNames.forEach((fieldName) => {
          selectedData[fieldName] = contact[fieldName];
        });
        return selectedData;
      });
    },
    removeFilter() {
      this.selectedFields = this.selectedFields.filter((field) => {
        if (
          field.label === "Name" ||
          field.label === "Company" ||
          field.label === "Email" ||
          field.label === "Mobile Number"
        ) {
          return true;
        } else {
          return false;
        }
      });

      this.displayFields = this.selectedFields.filter((field) => field.checked);
    },
    deleteContact(contactToDelete) {
      const indexToDelete = this.contacts.findIndex(
        (contact) => contact.Name === contactToDelete.Name
      );

      if (indexToDelete !== -1) {
        this.contacts.splice(indexToDelete, 1);
      }
    },
    editContact(contact, index) {
      this.editData = { ...contact };
      this.editIndex = index;
      this.showEditModal = true;
    },
    submitEdit() {
      if (this.editIndex !== -1) {
        this.contacts.splice(this.editIndex, 1, this.editData);
        this.showEditModal = false;
      }
    },
    cancelEdit() {
      this.showEditModal = false;
    },
  },
  watch: {
    itemsPerPage: "updateCurrentPage",
  },
};
</script>
  
  <style>
@import "../assets/css/personlist";
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  border-radius: 4px;
  width: 35%;
}
.div-head-modal {
  padding: 1rem 1rem 0 1rem;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
}
.head-modal {
  font-size: 18px;
  font-weight: bold;
}
label {
  margin-right: 10px;
}
.btn-close {
  font-size: 16px;
  font-weight: bold;
}
.div-content-modal,
.btn-group-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f8f8f9;
}
.feilds-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 318px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #d1d2d5;
}

.div-btn-add-feild {
  display: flex;
  justify-content: center;
}
.btn-add-feild {
  width: 318px;
  height: 44px;
  border-radius: 4px;
  border: 1px dashed #454957;
  background-color: #fff;
}
.btn-close-size {
  border: none;
  background: none;
}
.btn-modal-save {
  width: 96px;
  height: 34px;
  background-color: #123cc6;
  border: none;
  color: white;
  padding: 4px 14px 4px 14px;
  border-radius: 4px;
  gap: 10px;
  margin-right: 10px;
}
.btn-modal-cancel {
  margin-left: 10px;
  width: 96px;
  height: 34px;
  padding: 4px 14px 4px 14px;
  border-radius: 4px;
  border: 1px solid #d1d2d5;
}
</style>
  