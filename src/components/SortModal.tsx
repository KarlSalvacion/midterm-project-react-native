// import React from "react";
// import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";
// import { BlurView } from "expo-blur";
// import styles from "../styles-components/StyleSortModal";

// interface SortModalProps {
//   visible: boolean;
//   onClose: () => void;
//   title: string;
//   options: string[];
//   selectedOptions: string[];
//   onSelect: (option: string) => void;
//   onReset: () => void;
//   allowMultiple?: boolean;
// }

// const SortModal: React.FC<SortModalProps> = ({
//   visible,
//   onClose,
//   title,
//   options,
//   selectedOptions,
//   onSelect,
//   onReset,
//   allowMultiple = false,
// }) => {
//   return (
//     <Modal animationType="fade" transparent visible={visible}>
//       <View style={styles.modalOverlay}>
//       <BlurView intensity={50} tint="dark" style={styles.blurBackground} />
//         <View style={styles.modalContainer}>
//           <Text style={styles.modalTitle}>{title}</Text>
//           <FlatList
//             data={options}
//             keyExtractor={(item) => item}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={[
//                   styles.optionButton,
//                   selectedOptions.includes(item) && styles.selectedOption,
//                 ]}
//                 onPress={() => onSelect(item)}
//               >
//                 <Text style={styles.optionText}>{item}</Text>
//               </TouchableOpacity>
//             )}
//           />
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity onPress={onReset} style={styles.resetButton}>
//               <Text style={styles.buttonText}>Reset</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default SortModal;
