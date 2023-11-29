<template>
  <div :class="col ? `col-md-${col}` : ''" class="d-flex align-items-center">
      <div class="input_wrapper color_picker">
          <span class="custom_input_label"> {{ placeholder }} </span>
          <label
            class="custom_color_preview"
            :for="uniqueInputId"
            :style="{background: labelBackground}"
          ></label>
          <input
            :id="uniqueInputId"
            type="color"
            :value="value"
            @input="updateValue($event)"
          />
      </div>
  </div>
</template>

<script>
export default {
  name: "BaseColorPicker",

  props: {
    // ====== General Inputs Props
    value: {
      required: true,
    },
    placeholder: {
      required: true,
      type: String,
    },
    col: {
      required: false,
      type: String,
    },
  },

  data() {
    return {
      // Start:: Unique Input Id
      uniqueInputId: `color_picker_${Date.now()}`,
      // End:: Unique Input Id

      // Start:: Label Background Color
      labelBackground: this.value,
      // End:: Label Background Color
    }
  },

  watch: {
    value(newVal) {
      this.labelBackground = newVal;
    }
  },

  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
  },
}
</script>

<style lang="scss" scoped>
.input_wrapper {
  &.color_picker {
    position: relative;
    margin: 0;
    padding: 21px 10px 8px;
    background-color: #fff;
    border-radius: 10px;
    .custom_color_preview {
      display: block;
      padding-block: 10px;
      width: 100%;
      border-radius: 10px;
    }
    .custom_input_label {
      position: absolute;
      top: 3px;
      right: 12px;
      color: #a2a2a2;
      font-size: 12px;
      line-height: 12px;
    }
    input[type="color"] {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      width: 100%;
      max-height: 0;
    }
  }
}
</style>
