<template>
  <div class="form-container">
    <el-row>
      <el-col>
        <h1>Form with vuejs and Element ui</h1>
        <el-card :body-style="{ padding: '40px' }" shadow="hover">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-position="left"
            label-width="120px"
          >
            <el-form-item label="Activity name" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone" prop="region">
              <el-select v-model="ruleForm.region" placeholder="Activity zone">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Instant delivery" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="Activity type" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promodfggtion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="Sponsorship"></el-radio>
                <el-radio label="Venue"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >Create</el-button
              >
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-drawer
      title="Data from form inputs"
      :visible.sync="drawer"
      direction="rtl"
    >
      <ul class="form-data-list">
        <li v-for="(value, key) in formOuput" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formOuput: {},
      drawer: false,
      ruleForm: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "Length should be 3 to 10",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.formOuput = this.ruleForm;
          this.drawer = true;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.el-form-item {
  text-align: start;
}
.form-data-list {
  list-style-type: none;
  text-align: start;
  font-size: 14px;
  font-weight: 500;
  color: #34495e;
}
</style>
