import ContainerHeader from "./ContainerHeader";
import { useGridApiRef, XGrid } from "@material-ui/x-grid";

const Overview = ({columns, rows, handleColumnChange, handleColumnResize, handleFieldChange, addRow}) => {
    const apiRef = useGridApiRef();
    return (
            <XGrid
                rows = {rows}
                columns = {columns}
                apiRef={apiRef}
                rowHeight={50}
                onColumnResizeCommitted={(params) => handleColumnResize(params)}
                onEditCellChangeCommitted={(params) => handleFieldChange(params)}
                checkboxSelection
                disableSelectionOnClick
                onColumnOrderChange={(params) => handleColumnChange(params)}
                getRowClassName={(params) => `super-app-theme--${params.getValue(params.id, 'status')}`}
                components={{
                    Toolbar: ContainerHeader,
                }}
                componentsProps={{
                    toolbar: {addRow}
                }}
            ></XGrid>
    )
}

export default Overview
