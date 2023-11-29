<template>
  <div :class="col ? `col-md-${col}` : ''">
    <!-- =========== Text || Tel || Number || Email || Password =========== -->
    <div
      class="input_wrapper"
      :class="{ light: light }"
      v-if="type == 'text' || type == 'tel' || type == 'number' || type == 'email' || type == 'password'"
    >
      <label>
        {{ label }}
        <span v-if="required" class="requiredAstric">*</span>
      </label>
      <div class="_input">
        <input
          :type="type"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue"
          :required="required"
        />
        <span
          v-if="type == 'password'"
          @click="togglePassVisibily"
          class="icon"
        >
          <i v-show="passowrdVisible" class="fas fa-eye"></i>
          <i v-show="!passowrdVisible" class="fas fa-eye-slash"></i>
        </span>
      </div>

      <!-- Validation -->
      <transition name="fadeIn">
        <v-alert v-if="showAlert" dense border="left" type="error">{{
          validationMessage
        }}</v-alert>
      </transition>
    </div>

    <!-- =========== Textarea =========== -->
    <div
      class="input_wrapper textarea"
      :class="{ light: light }"
      v-if="type == 'textarea'"
    >
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <textarea
          :placeholder="placeholder"
          :value="value"
          @input="updateValue"
          :required="required"
          rows="3"
        ></textarea>
      </div>
    </div>

    <!-- =========== OTB =========== -->
    <div
      class="input_wrapper"
      :class="{ light: light }"
      dir="ltr"
      v-if="type == 'otb'"
    >
      <label class="otp_label">{{ label }}</label>
      <v-otp-input
        type="text"
        :length="length"
        :value="value"
        @input="updateValue($event)"
      />
    </div>

    <!-- =========== Search =========== -->
    <div
      class="input_wrapper search"
      :class="{ light: light }"
      v-if="type == 'search'"
    >
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <input
          :type="type"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue"
          :required="required"
        />
        <span @click="$emit('insideSubmit')" class="icon"
          ><i class="fas fa-search"></i
        ></span>
      </div>

      <!-- Keywords -->
      <div class="keywords">
        <span class="main">Try: </span>
        <span
          @click="$emit('setSerchTag', keyword.title)"
          class="colored"
          v-for="keyword in keywords"
          :key="keyword.id"
        >
          {{ keyword.title + ", " }}
        </span>
      </div>
    </div>

    <!-- =========== Date =========== -->
    <div class="input_wrapper picker" v-if="type == 'date'">
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <v-dialog persistent v-model="dateModel" width="290px">
          <template v-slot:activator="{ on, attrs }">
            <button
              type="button"
              v-on="on"
              class="virtual_date_input"
              style="padding-block: 15px; border-radius: 8px; padding-inline: 10px; width: 100%; font-size: 16px; background: #fff; text-align: start;"
              v-show="formattedHijriDate"
            >
              {{formattedHijriDate}}
            </button>
            <v-text-field
              v-show="!formattedHijriDate"
              :value="value"
              @input="updateValue($event)"
              :label="placeholder"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            <span class="icon"><i class="far fa-calendar-alt"></i></span>
          </template>
          <v-date-picker
            :value="value"
            @input="updateValue($event)"
            scrollable
            :locale="dateLocale"
          ></v-date-picker>
        </v-dialog>
      </div>
      <transition name="fadeIn">
        <v-alert v-if="showAlert" dense border="left" type="error">{{
          validationMessage
        }}</v-alert>
      </transition>
    </div>

    <!-- =========== Time =========== -->
    <div class="input_wrapper picker" v-if="type == 'time'">
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <v-dialog persistent v-model="timeModel" width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="value"
              @input="updateValue($event)"
              :label="placeholder"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            <span class="icon"><i class="fas fa-clock"></i></span>
          </template>
          <v-time-picker
            :value="value"
            @input="updateValue($event)"
            scrollable
          ></v-time-picker>
        </v-dialog>
      </div>
      <transition name="fadeIn">
        <v-alert v-if="showAlert" dense border="left" type="error">{{
          validationMessage
        }}</v-alert>
      </transition>
    </div>

    <!-- =========== Radio =========== -->
    <div class="input_wrapper radio" v-if="type == 'radio'">
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <v-radio-group @change="updateValue($event)" :value="value">
        <v-radio
          class="gender"
          v-for="radio in radios"
          :key="radio.id"
          :label="radio.name"
          :value="radio.value"
        ></v-radio>
      </v-radio-group>
    </div>

    <!-- =========== Checkbox =========== -->
    <div class="input_wrapper checkbox" v-if="type == 'checkbox'">
      <v-checkbox
        @change="updateValue($event)"
        :value="value"
        :label="label"
      ></v-checkbox>
    </div>

    <!-- =========== Phonecode =========== -->
    <div class="flagged_phone_content_wrapper" v-if="type == 'phonecode' && selectedCountry">
      <!-- Start:: Flag & Country Key -->
      <div class="wrapper position-relative">
        <!-- ********** Start:: Selected Flag & Key ********** -->
        <button
          type="button"
          class="selected_flag_wrapper"
          @click="toggleCountriesKeysMenu"
        >
          <span class="selected_country_key">
            {{ selectedCountry.key }}
          </span>
          <img
            class="selected_country_flg"
            :src="selectedCountry.flag"
            alt="flag"
            width="30"
            height="22"
          />
        </button>
        <!-- ********** End:: Selected Flag & Key ********** -->

        <!-- ********** Start:: Flags & Keys List ********** -->
        <transition name="fadeInUp">
          <ul class="keys_and_flags_list" v-if="countriesKeysMenuIsOpen">
            <li
              v-for="item in countriesKeys"
              :key="item.id"
              @click="selectKey(item)"
              class="list_item"
            >
              <img
                class="country_flg"
                :src="item.flag"
                alt="country flag"
                width="30"
                height="22"
              />
              <span class="country_key">
                {{ item.key }}
              </span>
            </li>
          </ul>
        </transition>
        <!-- ********** End:: Flags & Keys List ********** -->
      </div>
      <!-- End:: Flag & Country Key -->

      <!-- Start:: Phone Input -->
      <div class="input_wrapper">
        <div class="_input">
          <input
            type="tel"
            :placeholder="placeholder"
            :value="value"
            @blur="validateInput(value)"
            @input="updateValue($event)"
            :required="required"
          />
        </div>
        <transition name="fadeIn">
          <p class="validationErr" v-if="showAlert">{{ validationMessage }}</p>
        </transition>
      </div>
      <!-- End:: Phone Input -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    light: {
      required: false,
      type: Boolean,
    },
    keywords: {
      required: false,
      type: [],
    },
    formattedHijriDate: {
      required: false,
      type: String,
    },
    length: {
      required: false,
      type: String,
    },
    value: {
      required: false,
    },
    type: {
      required: true,
      type: String,
    },
    placeholder: {
      required: false,
      type: String,
    },
    label: {
      required: false,
      type: String,
    },
    col: {
      required: false,
      type: String,
      default: "12",
    },
    required: {
      required: false,
      type: Boolean,
      default: false,
    },
    radios: {
      required: false,
      type: Array,
    },
    preSelectedPhoneCode: {
      required: false,
      type: String,
    },
    dateLocale: {
      required: false,
      type: String,
      default: "en-US"
    },
  },

  data() {
    return {
      // =========> Alert Data
      showAlert: false,
      validationMessage: "errer",

      // =========> Picker Data
      dateModel: false,
      timeModel: false,

      // =========> Passowrd Icon Status
      passowrdVisible: false,

      // =========> Phonecode Input Data
      countriesKeys: [
        // {
        //   id: 1,
        //   flag: require("~/assets/media/images/flags/ar.png"),
        //   key: "996"
        // },
        // {
        //   id: 2,
        //   flag: require("~/assets/media/images/flags/ar.png"),
        //   key: "002"
        // },
      ],
      // Start:: Controle Countries Keys Menu Data
      countriesKeysMenuIsOpen: true,
      // End:: Controle Countries Keys Menu Data

      // Start:: Selected Country Data
      selectedCountry: null,
      // End:: Selected Country Data
    };
  },

  methods: {
    updateValue(e) {
      this.dateModel = false;
      this.timeModel = false;

      if (
        this.type == "otb" ||
        this.type == "date" ||
        this.type == "time" ||
        this.type == "radio" ||
        this.type == "checkbox"
      ) {
        this.$emit("input", e);
        this.validateInput(e);
      } else {
        this.$emit("input", e.target.value);
        this.validateInput(e.target.value);
      }
    },

    togglePassVisibily(e) {
      const iconSpan = e.currentTarget;
      const input = iconSpan.previousElementSibling;

      if (input.getAttribute("type") == "text") {
        this.passowrdVisible = false;
        input.setAttribute("type", "password");
      } else {
        this.passowrdVisible = true;
        input.setAttribute("type", "text");
      }
    },

    validateInput(value) {
      if (this.required) {
        let valid = true;

        if (this.type == "email") {
          this.validationMessage = this.$t("validation.email");
          valid = this.helper_validEmail(value);
        } else {
          if (!value) {
            this.validationMessage = this.$t("validation.empty");
            valid = false;
          }
        }

        this.showAlert = !valid;
      }
    },

    // =========> Phonecode Input Methods
    // Start:: Toggle Countries Keys Menu
    toggleCountriesKeysMenu() {
      this.countriesKeysMenuIsOpen = !this.countriesKeysMenuIsOpen;
    },
    // End:: Toggle Countries Keys Menu

    // Start:: Update Selected Country Key Value
    updateSelectedCountryKeyValue() {
      this.$emit("changeKey", this.selectedCountry.key);
    },
    // End:: Update Selected Country Key Value

    // Start:: Select Country Key
    selectKey(country) {
      this.selectedCountry = country;
      this.updateSelectedCountryKeyValue();
      this.toggleCountriesKeysMenu();
    },
    // End:: Select Country Key

    getCountryeKeys() {
      this.$axios({
        method: "GET",
        url: `countries_without_pagination`,
      })
        .then((res) => {
          this.countriesKeys = res.data.data.map((item) => {
            return {
              id: item.id,
              flag: item.icon,
              key: item.phone_code,
            };
          });

          this.selectKey(this.countriesKeys[0]);
          // ********** Start:: Set Initial Selected Key **********
          if (this.preSelectedPhoneCode) {
            this.selectedCountry = this.countriesKeys.find(
              (country) => country.key == this.preSelectedPhoneCode
            );
          } else {
            this.selectedCountry = this.countriesKeys[0];
          }
          this.updateSelectedCountryKeyValue();
          // ********** End:: Set Initial Selected Key **********
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    if(this.type == "phonecode") {
      this.getCountryeKeys();
      // this.selectKey(this.countriesKeys[0]);
    }
  },
};

</script>

<style lang="scss" scoped></style>
