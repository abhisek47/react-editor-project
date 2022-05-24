import React from 'react'
import Modal from 'react-modal'
import { FiSend } from 'react-icons/fi'
import ReactGiphySearchbox from 'react-giphy-searchbox'
import { BsEmojiLaughing } from 'react-icons/bs'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const GifModal = ({ setGif }) => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal(e) {
    e.preventDefault()
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <div>
        <button className='p-1 font-bold' onClick={openModal}>
          <BsEmojiLaughing className='text-gray-500/75 mt-0.5' size={18} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel='Example Modal'
        >
          <div className='flex items-center justify-between mb-3'>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Upload GIF</h2>
            <button className='text-xl' onClick={closeModal}>
              <FiSend />
            </button>
          </div>
          <div className='searchboxWrapper' style={{ width: '100%' }}>
            <ReactGiphySearchbox
              apiKey='1hqexOwDJU7auRDWAXogTvGYjnqruv0B'
              onSelect={(item) => {
                console.log(item)
                setGif(item.images.preview_gif.url)
              }}
              masonryConfig={[
                { columns: 2, imageWidth: 110, gutter: 5 },
                { mq: '700px', columns: 3, imageWidth: 120, gutter: 2 }
              ]}
            />
          </div>
        </Modal>
      </div>
    </>
  )
}

export default GifModal
