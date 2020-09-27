import { shallowMount } from "@vue/test-utils"
import Search from "@/components/Search"
import axios from "axios"

test('Renders a found image message', () => {
  const search = shallowMount(Search)
  expect(search.text()).toContain('Found images(0)')
})

test('Renders a found image message with a given value', async() => {
  const search = shallowMount(Search)
  const currentNumberOfImages = 32

  search.setData({
    numberOfImages: currentNumberOfImages
  })

  await search.vm.$nextTick

  expect(search.text()).toContain("Found images(" + currentNumberOfImages +")")
})

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ 
    data: { 
        collection: {
            items: [
                {
                    links : [
                        {
                            href: 'http://www.this-is-a-link-com'
                        }
                    ]
                },
                {
                    links : [
                        {
                            href: 'http://www.this-is-another-link-com'
                        }
                    ]
                }
            ]
        }  
    }
  }))
}))

test('Should call the API on submit', async () => {
  const search = shallowMount(Search)
  const query = "jupiter"

  search.setData({ query })
  await search.vm.makeRequest(query)

  expect(axios.get).toBeCalledWith('https://images-api.nasa.gov/search?media_type=image&q=' + query)
})

test('Should call on submit and update the results array', async() => {
  const search = shallowMount(Search)
  const query = "jupiter"

  search.setData( { query})
  await search.vm.makeRequest(query)

  expect(search.vm.numberOfImages).toBe(2)
})