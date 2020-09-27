const { shallowMount } = require("@vue/test-utils")
import Gallery from '@/components/Gallery'

test('Should print empty message when no results are found', () => {
    const wrapper = shallowMount(Gallery, {
        propsData: {
            results: []
        }
    })

    expect(wrapper.text()).toContain('No images were found')
})

test('Should print each result image', () => {
    const firstImage = "http://www.firstLink.com"
    const secondImage = "http://www.secondlink.com"

    const component = shallowMount(Gallery, {
        propsData: {
            results: [
                firstImage,
                secondImage
            ]
        }
    })

    expect(component.text()).toContain(firstImage)
    expect(component.text()).toContain(secondImage)
})