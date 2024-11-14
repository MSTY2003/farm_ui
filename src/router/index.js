import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandDataAnalysis from '../views/LandDataAnalysis.vue'
// import LandMonitoring from '../views/LandMonitoring.vue'
// import CropDistribution from '../views/CropDistribution.vue'
// import VarietyManagement from '../views/VarietyManagement.vue'
// import PlantingPlan from '../views/PlantingPlan.vue'
// import TaskAssignment from '../views/TaskAssignment.vue'
// import EquipmentManagement from '../views/EquipmentManagement.vue'
// import EquipmentControl from '../views/EquipmentControl.vue'
// import OutgoingManagement from '../views/OutgoingManagement.vue'
// import IncomingManagement from '../views/IncomingManagement.vue'
// import InventoryQuery from '../views/InventoryQuery.vue'
// import PersonnelManagement from '../views/PersonnelManagement.vue'
// import BusinessData from '../views/BusinessData.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // 概览页面
  },
  {
    path: '/landDataAnalysis',
    name: 'landDataAnalysis',
    component: LandDataAnalysis // 地块数据分析页面
  },
  // {
  //   path: '/land-monitoring',
  //   name: 'landMonitoring',
  //   component: LandMonitoring // 地块监控画面页面
  // },
  // {
  //   path: '/crop-distribution',
  //   name: 'cropDistribution',
  //   component: CropDistribution // 作物分布页面
  // },
  // {
  //   path: '/variety-management',
  //   name: 'varietyManagement',
  //   component: VarietyManagement // 品种管理页面
  // },
  // {
  //   path: '/planting-plan',
  //   name: 'plantingPlan',
  //   component: PlantingPlan // 种植计划页面
  // },
  // {
  //   path: '/task-assignment',
  //   name: 'taskAssignment',
  //   component: TaskAssignment // 任务分配页面
  // },
  // {
  //   path: '/equipment-management',
  //   name: 'equipmentManagement',
  //   component: EquipmentManagement // 设备管理页面
  // },
  // {
  //   path: '/equipment-control',
  //   name: 'equipmentControl',
  //   component: EquipmentControl // 设备控制页面
  // },
  // {
  //   path: '/outgoing-management',
  //   name: 'outgoingManagement',
  //   component: OutgoingManagement // 出库管理页面
  // },
  // {
  //   path: '/incoming-management',
  //   name: 'incomingManagement',
  //   component: IncomingManagement // 入库管理页面
  // },
  // {
  //   path: '/inventory-query',
  //   name: 'inventoryQuery',
  //   component: InventoryQuery // 在库查询页面
  // },
  // {
  //   path: '/personnel-management',
  //   name: 'personnelManagement',
  //   component: PersonnelManagement // 人员管理页面
  // },
  // {
  //   path: '/business-data',
  //   name: 'businessData',
  //   component: BusinessData // 业务数据页面
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
