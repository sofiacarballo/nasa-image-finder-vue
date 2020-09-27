import { shallowMount } from "@vue/test-utils"
import Search from '@/components/Search'

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

test('Should filter the found images on submit by the query size', async() => {
  const component = shallowMount(Search)
  const query = 'jupiter'
  
  await component.vm.makeRequest(query)

  expect(component.text()).toContain('Found images('+ query.length+')')
})