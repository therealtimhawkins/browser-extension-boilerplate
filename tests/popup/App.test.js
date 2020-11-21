import { shallowMount } from "@vue/test-utils";
import App from "@/popup/App.vue";

describe("Popup", () => {
  describe("initial state", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallowMount(App);
    });

    it("shows welcome message", () => {
      const header = wrapper.find("h1");
      expect(header.exists()).toBe(true);
    });
  });
});
