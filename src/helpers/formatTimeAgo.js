export const formatTimeAgo = (dateString) => {
    const now = new Date(),
        date = new Date(dateString),
        secondPast = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (secondPast < 60) {
        return `${Math.floor(secondPast)} seconds ago`;
    }
    if (secondPast < 3600) {
        return `${Math.floor(secondPast / 60)} minutes ago`;
    }
    if (secondPast < 86400) {
        return `${Math.floor(secondPast / 3600)} hours ago`;
    }
    if (secondPast < 604800) {
        const day = Math.floor(secondPast / 86400);
        return day === 1 ? `${day} day ago` : `${day} days ago`;
    }
};
