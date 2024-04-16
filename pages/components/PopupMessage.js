// import React, { useState } from 'react';
// import {
//   Button,
//   Center,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
// } from '@chakra-ui/react';
// import Image from 'next/image';
// import invitation from "../../public/photos/invitation.jpg";
// import invitation2 from "../../public/photos/invitation2.jpg"

// const PopupMessage = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={handleClose} isCentered>
//       <ModalOverlay />
//       <ModalContent  height="500px" minWidth="700px">
//         <ModalHeader>IEI NMLC-FCRIT EXCELLENCE AWARD-2023</ModalHeader>
//         <ModalBody overflowY="auto">
//           <Center display="flex flex-column">
//             {/* <p className="text-2xl font-bold">This is a sample pop-up message.</p> */}
//             <Image src={invitation} />
//             <Image src={invitation2} />
//           </Center>
//         </ModalBody>
//         <ModalFooter>
//           <Center>
//             <Button colorScheme="blue" onClick={handleClose}>
//               Close
//             </Button>
//           </Center>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default PopupMessage;
