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
    const resultsData = [
        {
            links: [
                {
                    href: firstImage
                }
            ]
        },
        {
            links: [
                {
                    href: secondImage
                }
            ]
        }
    ]

    const wrapper = shallowMount(Gallery, {
        propsData: {
            results: resultsData
        }
    })

    expect(wrapper.findAll('img').at(0).attributes().src).toEqual(firstImage)
    expect(wrapper.findAll('img').at(1).attributes().src).toEqual(secondImage)
})