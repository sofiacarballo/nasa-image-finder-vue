import { shallowMount } from "@vue/test-utils"
import Search from '@/components/Search'
import axios from 'axios'

test('Renders a found image message', () => {
  const component = shallowMount(Search)
  expect(component.text()).toContain('Found images(0)')
})

test('Renders a found image message with a given value', async() => {
  const component = shallowMount(Search)
  const currentNumberOfImages = 32

  component.setData({
    numberOfImages: currentNumberOfImages
  })

  await component.vm.$nextTick

  expect(component.text()).toContain("Found images(" + currentNumberOfImages +")")
})

test('Should update found images when the query is changed with the query size', async () => {
  const component = shallowMount(Search)
  const query = "jupyter"

  await component.vm.makeRequest(query)

  expect(component.text()).toContain('Found images('+ query.length +')')
})

test('Should update found images on submit with the query size', async () => {
  const component = shallowMount(Search)
  const query = "jupyter"

  component.setData({ query })
  await component.find('form').trigger('submit')

  expect(component.text()).toContain('Found images('+ query.length +')')
})

jest.mock('axios', () => ({
  get: jest.fn()
}))

test('Should call the API on submit', async () => {
  const component = shallowMount(Search)
  const query = "sun"

  component.setData({ query })
  await component.find('form').trigger('submit')

  expect(axios.get).toBeCalledWith('https://images-api.nasa.gov/search?media_type=image&q=' + query)
})
