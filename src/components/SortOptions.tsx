// import React, { useState } from "react";
// import { View, ScrollView, TouchableOpacity, Text } from "react-native";
// import SortModal from "./SortModal";
// import styles from "../styles-components/StyleSortOptions";
// import { useSort } from "../context/SortingContext";

// const SortBar: React.FC = () => {
//   const categories = [
//     { title: "Date Posted", options: ["Newest", "Oldest"] },
//     { title: "Company Name", options: ["Ascending", "Descending"] },
//     { title: "Job Type", options: ["Full-time", "Internship"], multiple: true },
//     { title: "Work Model", options: ["On-site", "Hybrid", "Remote"], multiple: true },
//     { title: "Seniority Level", options: ["Mid", "Junior", "Senior", "Director"], multiple: true },
//   ];

//   const { sortOptions, setSortOptions, resetSort } = useSort();
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);

//   const handleSortSelect = (category: string, option: string) => {
//     setSortOptions((prev) => {
//       const isMultiple = categories.find((c) => c.title === category)?.multiple;
//       let newOptions = isMultiple
//         ? prev[category]?.includes(option)
//           ? prev[category].filter((o) => o !== option)
//           : [...(prev[category] || []), option]
//         : [option];

//       return { ...prev, [category]: newOptions };
//     });
//   };

//   return (
//     <View style={styles.sortBarContainer}>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {categories.map((category) => (
//           <TouchableOpacity
//             key={category.title}
//             style={styles.sortButton}
//             onPress={() => setActiveCategory(category.title)}
//           >
//             <Text style={styles.sortButtonText}>{category.title}</Text>
//           </TouchableOpacity>
//         ))}
//         <TouchableOpacity style={styles.resetAllButton} onPress={resetSort}>
//           <Text style={styles.resetButtonText}>Reset All</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       {activeCategory && (
//         <SortModal
//             visible={true}
//             title={activeCategory}
//             options={categories.find((c) => c.title === activeCategory)?.options || []}
//             selectedOptions={sortOptions[activeCategory] || []}
//             onSelect={(option) => handleSortSelect(activeCategory, option)}
//             onReset={() => setSortOptions((prev) => {
//             const newState = { ...prev };
//             delete newState[activeCategory];
//             return newState;
//             })}
//             onClose={() => setActiveCategory(null)}
//         />
      
//       )}
//     </View>
//   );
// };

// export default SortBar;
