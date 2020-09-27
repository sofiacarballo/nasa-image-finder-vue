const { shallowMount } = require("@vue/test-utils")
import Gallery from '@/components/Gallery'

test('Should print empty message when no results are found', () => {
    const wrapper = shallowMount(Gallery)

    expect(wrapper.text()).toContain('No images were found')
})