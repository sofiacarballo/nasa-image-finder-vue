import { shallowMount } from "@vue/test-utils"
import Search from '@/components/Search'

test('Renders a found image message', () => {
  const component = shallowMount(Search)
  expect(component.text()).toContain('Found images(0)')
})