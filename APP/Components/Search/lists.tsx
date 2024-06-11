import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  SectionList,
  ListRenderItemInfo,
  SectionListData,
  SectionListRenderItemInfo,
} from "react-native";
import CatigoryItem from "./listItem";

interface Category {
  id: number;
  value: string;
  name: string;
  icon: any; // You might want to type this more strictly based on your assets
}

interface Section {
  title: string;
  data: string[];
}

interface ListsProps {
  setSelectedCategory: (category: string) => void;
}

export default function Lists() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategoryState] =
    useState<Category | null>(null);
  const [sections, setSections] = useState<Section[]>([]);

  const List: Category[] = [
    {
      id: 6,
      value: "campus",
      name: "Campus",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 7,
      value: "faculty",
      name: "Faculty",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 8,
      value: "depertment",
      name: "Depertment",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 9,
      value: "center",
      name: "Center",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 10,
      value: "institutes",
      name: "Institutes",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 11,
      value: "schools",
      name: "Schools/Colleges",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 12,
      value: "hostel",
      name: "Hostel",
      icon: require("./../../../assets/placeholder.jpg"),
    },
  ];

  const facultySections: Section[] = [
    {
      title: "Faculties",
      data: [
        "ABU Business School",
        "Administration",
        "Agriculture",
        "Allied Health Sciences",
        "Arts",
        "Basic Clinical Sciences",
        "Basic Medical Sciences",
        "Dental Surgery",
        "Clinical Sciences",
        "Education",
        "Engineering",
        "Environmental Design",
        "Law",
        "Life Sciences",
        "Physical Sciences",
        "Pharmacy",
        "Social Sciences",
        "Veterinary Medicine",
      ],
    },
  ];

  const centerSections: Section[] = [
    {
      title: "Centers",
      data: [
        "Africa Center of Excellence on New Pedagogies in Engineering Education",
        "Africa Center of Excellence for Neglected Tropical Diseases and Forensic Biotechnology",
        "CBT Center",
        "Centre For Biotechnology Research And Training",
        "Center For Climate Change Economics, Policy and Innovation (CCCEPI)",
        "Centre For Energy Research and Training",
        "Centre For Historical Documentation and Research, Arewa House",
        "Go to Website",
        "Centre For Islamic and Legal Studies",
        "Counselling And Human Development Centre",
        "Distance Learning Centre",
        "International Centre of Excellence for Rural Finance & Entrepreneurship",
        "International Institute Online Education - National Center (IIOE-NC), Nigeria",
        "Venom, Anti-Venom and Natural Toxins Research Centre",
        "Centre for Development Communication",
        "Veterinary Public Health",
        "Sustainable Procurement, Environmental and Social Standards Enhancement Centre for Excellence (SPESSCE)",
        "Central Bank of Nigeria Centre of Excellence",
        "Public Procurement Research Centre",
      ],
    },
  ];

  const campusSections: Section[] = [
    {
      title: "Campus",
      data: ["Main Campus", "Kongo Campus"],
    },
  ];

  const hostelSections: Section[] = [
    {
      title: "Hostels",
      data: [],
    },
  ];

  const instituteSections: Section[] = [
    {
      title: "Institutes",
      data: [
        "CBT Center",
        "Iya Abubakar Institute of ICT",
        "Institute of Administration",
        "Institute of Education",
        "Institute for Agricultural Research",
        "Institute for Development Research and Training",
        "National Animal Production Research Institute (NAPRI)",
      ],
    },
  ];

  const schoolSections: Section[] = [
    {
      title: "Schools/Colleges",
      data: [
        "Business School",
        "College of Medicine",
        "Division of Agric",
        "School of Basic Remedial Studies",
        "School of Postgraduate Studies",
      ],
    },
  ];

  const defaultSections: Section[] = [
    {
      title: "Section 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3"],
    },
    {
      title: "Section 2",
      data: ["Item 2-1", "Item 2-2", "Item 2-3"],
    },
  ];

  const handlePress = (item: Category) => {
    setSelectedCategoryState(item);

    // Update sections based on the selected category
    if (item.value === "faculty") {
      setSections(facultySections);
    } else if (item.value === "center") {
      setSections(centerSections);
    } else if (item.value === "institutes") {
      setSections(instituteSections);
    } else if (item.value === "schools") {
      setSections(schoolSections);
    } else if (item.value === "campus") {
      setSections(campusSections);
    } else if (item.value === "hostel") {
      setSections(hostelSections);
    } else {
      setSections(defaultSections);
    }

    setModalVisible(true);
  };

  return (
    <View>
      <Text style={styles.text}>Find Place</Text>
      <FlatList
        horizontal={true}
        data={List}
        renderItem={({ item }: ListRenderItemInfo<Category>) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <CatigoryItem catigory={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          {/* <Text style={styles.modalText}>
            Selected Category: {selectedCategory?.name}
          </Text> */}
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }: SectionListRenderItemInfo<string>) => (
              <TouchableOpacity onPress={() => console.log(item)}>
                <Text style={styles.item}>{item}</Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({
              section,
            }: {
              section: SectionListData<string>;
            }) => <Text style={styles.header}>{section.title}</Text>}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 15,
    fontWeight: "bold",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
