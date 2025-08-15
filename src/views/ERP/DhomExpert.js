import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const AREAS = [
  { key: "comercial", label: "Comercial" },
  { key: "compras", label: "Compras" },
  { key: "financeiro", label: "Financeiro" },
  { key: "fiscal", label: "Fiscal" },
];

export default function DhomExpert() {
  const [tabs, setTabs] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const openTab = (area) => {
    let index = tabs.findIndex((t) => t.key === area.key);
    if (index === -1) {
      setTabs([...tabs, area]);
      index = tabs.length;
    }
    setActiveIndex(index);
    setMenuOpen(false);
  };

  return (
    <Box p="4">
      <IconButton
        aria-label="Abrir menu"
        icon={<HamburgerIcon />}
        mb={4}
        onClick={() => setMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <VStack align="stretch" mb={4} spacing={2}>
          {AREAS.map((area) => (
            <Button key={area.key} onClick={() => openTab(area)}>
              {area.label}
            </Button>
          ))}
        </VStack>
      )}
      {tabs.length > 0 && (
        <Tabs
          index={activeIndex}
          onChange={setActiveIndex}
          isLazy
          variant="enclosed"
        >
          <TabList>
            {tabs.map((tab) => (
              <Tab key={tab.key}>{tab.label}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabs.map((tab) => (
              <TabPanel key={tab.key}>
                Conteúdo da área {tab.label}.
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </Box>
  );
}

