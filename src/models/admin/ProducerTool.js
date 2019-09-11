const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProducerToolSchema = new Schema({
  name: { type: String, required: true },
  page: { type: String, required: true },
  imgSrc: { type: String, required: true },
  dropboxUrl: { type: String, required: true },
  description: {
    type: Object,
    default: {
      style: {
        backgroundColor: '#fff',
        color: '#000',
      },
      text:
        'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank. Brisket fatback strip steak tail',
    },
    required: true,
  },
  blocks: {
    type: Array,
    required: true,
    default: [{ type: 'soundcloud', content: {}, id: 'asdfbcasdf' }],
  },
})
const ProducerTool = mongoose.model('admin-producerTool', ProducerToolSchema)

module.exports = ProducerTool
