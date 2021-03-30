import React from 'react'

const ImageWidget = ({widget, editingX, cachedWidgetX, setCachedWidgetX}) => {
    return (
        <div>
            {
                !editingX &&
                <div>
                    <img width={widget.width} height={widget.height} src={widget.src}/>
                </div>
            }
            {
                editingX &&
                <div>
                    URL
                    <input onChange={(e) => setCachedWidgetX(widget => ({...cachedWidgetX, src: e.target.value}))} value={cachedWidgetX.src} className="form-control"/>
                    width
                    <input onChange={(e) => setCachedWidgetX(widget => ({...cachedWidgetX, width: e.target.value}))} value={cachedWidgetX.width} className="form-control"/>
                    height
                    <input onChange={(e) => setCachedWidgetX(widget => ({...cachedWidgetX, height: e.target.value}))} value={cachedWidgetX.height} className="form-control"/>
                </div>
            }
        </div>
    )
}

export default ImageWidget