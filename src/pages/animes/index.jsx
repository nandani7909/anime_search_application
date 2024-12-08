import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavTabs from "../../components/nav-tabs";
import DropdownSearch from "../../components/dropdownSearch";
import Table from "../../components/dataTable";
import * as AnimesActions from './animesActions';
import styles from "./styles.module.scss";

/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description animes lisitng
 * @param       animes Request paylod like serach key, type, status
 * @response    animes response is success or fail.
 **/

const Animes = (props) => {
  const { animes, actions } = props;
  const [firstInit, setFirstInit] = useState(false);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [animesdata, setAnimesData] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedType, setSelectedType] = useState("");
  const [search, setSearch] = useState("");
  const [pending, setPending] = React.useState(true);

  const typeOptions = [
    { label: "Tv", value: "tv" },
    { label: "Movie", value: "movie" },
    { label: "Ova", value: "ova" },
    { label: "Special", value: "special" },
    { label: "Ona", value: "ona" },
    { label: "Music", value: "music" },
    { label: "Cm", value: "cm" },
    { label: "Pv", value: "pv" },
    { label: "Tv Special", value: "tv_special" }
  ];

  useEffect(() => {
    if (firstInit) {
      setPending(true);
      const status = activeTab === "All" ? "" : activeTab;
      actions.animesSearchReq({ page, limit: perPage, status, type: selectedType, q: search, sort: 'desc' });
      setFirstInit(false);
    }
  }, [firstInit, page, perPage, activeTab, selectedType, search]);

  useEffect(() => {
    setFirstInit(true);
  }, [page, perPage, activeTab, selectedType, search]);

  useEffect(() => {
    if (animes?.data !== undefined && !animes?.isanimes) {
      setAnimesData(animes?.data?.data);
      setPending(false);
    }
  }, [animes?.data, animes?.isanimes]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
  };

  const handleSearch = (query) => {
    setSearch(query);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const columns = [
    {
      name: "Title",
      sortable: true,
      cell: (row) => (
        <div className="d-flex align-items-center">
          <img
            src={row?.images?.jpg?.image_url}
            alt={row.title}
            className="rounded-circle"
            style={{ width: '40px', height: '40px', objectFit: 'cover', marginRight: '10px' }}
          />
          <div>
            <span>{row.title}</span>
            <div className="text-muted" style={{ fontSize: '0.875rem' }}>Episodes: {row.episodes}</div>
          </div>
        </div>
      )
    },
    {
      name: "Rank",
      selector: (row) => row.rank || '-',
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Status",
      minWidth: "150px",
      maxWidth: "55px",
      cell: (row) => (
        <>
          {row?.status === "Finished Airing" ? (
            <span className="badge bg-success p-3">Complete</span>
          ) : row?.status === "Currently Airing" ? (
            <span className="badge bg-danger text-white p-3">Airing</span>
          ) : row?.status === "Not yet aired" ? (
            <span className="badge bg-warning text-dark p-3">Upcoming</span>
          ) : (
            <span className="badge bg-danger-subtle text-danger p-3">Unknown</span>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <div className={`${styles["bg-light w-100"]} ${styles.main}`}>
        <div className="container-fluid py-3">
          <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <DropdownSearch
            setSearch={handleSearch}
            setType={handleTypeChange}
            typeOptions={typeOptions}
            search={search}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            animesdata={animes}
          />
          <Table
            columns={columns}
            data={animesdata}
            pagination
            paginationServer
            paginationTotalRows={animes?.data?.pagination?.items?.total}
            paginationPerPage={perPage}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerPageChange}
            progressPending={pending}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  animes: state.animes,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AnimesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Animes);