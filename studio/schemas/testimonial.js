import { RiVipCrownLine } from 'react-icons/ri'

export default {
  name: 'testimonial',
  label: 'Testimonial',
  type: 'document',
  icon: RiVipCrownLine,
  fields: [
    { name: 'name', type: 'string', label: 'Name' },
    { name: 'position', type: 'string', label: 'Position' },
    { name: 'testimony', type: 'richText', label: 'Testimony' },
    { name: 'profilePicture', type: 'image', label: 'Profile picture' },
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'profilePicture',
    },
  },
}
