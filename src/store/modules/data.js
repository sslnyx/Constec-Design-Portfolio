import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL

const api = "wp/v2/project";
const servicesApi = "wp/v2/service";
const pagesApi = "wp/v2/pages";
const bnaApi = "wp/v2/bna";


const param = {
  per_page: 100, // Only retrieve the 3 most recent blog posts.
  page: 1, // Current page of the collection.
  _embed: true, //Response should include embedded resources.
};

const state = {
  projects: [],
  pages: [],
  services: [],
  bna:[],

  allPagesLoaded: false,
  allProjectsLoaded: false,
  allServicesLoaded: false,
  allBnaLoaded: false
};

const getters = {
  allProjects: (state) => state.projects,
  allPages: (state) => state.pages,
  allServices: (state) => state.services,
  allBna: (state) => state.bna,

  getService: (state) => (id) => {
    return state.services.find((service) => service.slug === id);
  },
  getProject: (state) => (id) => {
    return state.projects.find((project) => project.slug === id);
  },
  getPage: (state) => (id) => {
    return state.pages.find((page) => page.slug === id);
  },
};

const actions = {
  async fetchProjects({ commit }) {
    const response = await axios.get(api, param);
    commit("SET_PROJECTS", response.data);
    commit("SET_PROJECTS_LOAD", true);
  },

  async fetchPages({ commit }) {
    const response = await axios.get(pagesApi, param);
    commit("SET_PAGES", response.data);
    commit("SET_PAGES_LOAD", true);
  },

  async fetchServices({ commit }) {
    const response = await axios.get(servicesApi, param);
    commit("SET_SERVICES", response.data);
    commit("SET_SERVICES_LOAD", true);
  },

  async fetchBna({ commit }) {
    const response = await axios.get(bnaApi, param);
    commit("SET_BNA", response.data);
    commit("SET_BNA_LOAD", true);
  },
};

const mutations = {
  SET_PROJECTS: (state, projects) => (state.projects = projects),
  SET_PAGES: (state, pages) => (state.pages = pages),
  SET_PAGES_LOAD: (state, val) => (state.allPagesLoaded = val),
  SET_PROJECTS_LOAD: (state, val) => (state.allProjectsLoaded = val),
  SET_SERVICES: (state, services) => (state.services = services),
  SET_SERVICES_LOAD: (state, val) => (state.allServicesLoaded = val),
  SET_BNA: (state, bna) => (state.bna = bna),
  SET_BNA_LOAD: (state, val) => (state.allBnaLoaded = val),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
