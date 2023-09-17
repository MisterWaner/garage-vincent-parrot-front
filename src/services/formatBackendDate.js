const formatBackendDate = (backendDate) => {
    const [year, month, day] = backendDate.split("-");
    return new Date(year, month - 1, day);
}

export default formatBackendDate;